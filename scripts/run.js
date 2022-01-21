//Test script
const main = async () => {
    //Define actors:
    const [owner, testPerson01] = await hre.ethers.getSigners();
    //Calling + Deploying the contract into local tesnet
    const HiTellMeFactory = await hre.ethers.getContractFactory("HiTellMe");
    const HiTellMe = await HiTellMeFactory.deploy();
    await HiTellMe.deployed();

    //Pre-logs:
    console.log("Contract address:", HiTellMe.address);
    console.log("Contract owner:", owner.address);

    //Calling the functions:
    let hiCounts;
    hiCounts = await HiTellMe.sumHis();

    let hiFromUsers = await HiTellMe.connect(testPerson01).sayHi();
    await hiFromUsers.wait();

    hiCounts = await HiTellMe.sumHis();
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