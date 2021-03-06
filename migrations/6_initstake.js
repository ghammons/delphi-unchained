/* global artifacts */

const DelphiVoting = artifacts.require('DelphiVoting.sol');
const DelphiStakeFactory = artifacts.require('DelphiStakeFactory.sol');
const Token = artifacts.require('tokens/eip20/EIP20.sol');

const fs = require('fs');

module.exports = (deployer, network) => {
  deployer.then(async () => {
    const df = await DelphiStakeFactory.deployed();

    const conf = JSON.parse(fs.readFileSync('./conf/dsConfig.json'));

    let arbiter = conf.arbiter;
    let token = conf.token;

    // If we are testing, using whatever token and DV instances were deployed by this migrator,
    // and approve the DS instance to transfer from the token.
    if (network === 'test' || network === 'coverage') {
      arbiter = (await DelphiVoting.deployed()).address;
      token = (await Token.deployed()).address;

      await (await Token.at(token))
        .approve(df.address, conf.initialStake);
    }

    return df.createDelphiStake(conf.initialStake, token, conf.minFee, conf.data,
      conf.deadline, arbiter);
  });
};
