const main = async () => {
    const HiTellMeFactory = await hre.ethers.getContractFactory("HiTellMe");
    const HiTellMe = await HiTellMeFactory.deploy();
    await HiTellMe.deployed();
    console.log("Contract address:", HiTellMe.address);
    };

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
    console.log(error);
    process.exit(1);
    }
    };

runMain(); 