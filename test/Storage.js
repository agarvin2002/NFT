const Storage = artifacts.require("Storage");

contract("Storage", () => {
    it("It stores and returns a value", async () => {
        const storage = await Storage.deployed(); // Rename the variable to storageInstance
        await storage.store(1); // Use storageInstance instead of Storage
        const returnValue = await storage.retrive(); // Use storageInstance instead of Storage
        assert.equal(returnValue, 1, "error in storing and returning the value");
    });
});
