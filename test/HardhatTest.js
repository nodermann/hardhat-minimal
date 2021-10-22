const Counter = artifacts.require('./Counter.sol');

contract('Counter', async () => {
    before(async function () {
        this.counter = await Counter.new();
    });
    describe('Test interval mining', () => {
        it('Should perform two transactions in one block', async function () {
            const task1 = this.counter.plusOne();
            const task2 = this.counter.plusOne();

            const results = await Promise.all([task1, task2]);

            const blockNumberTask1 = results[0].receipt.blockNumber;
            const blockNumberTask2 = results[1].receipt.blockNumber;

            assert.equal(blockNumberTask1, blockNumberTask2);
        });
    });
});