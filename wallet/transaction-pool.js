
class TransactionPool {
    constructor(){
        this.transactions = [];
    }

    updateOrAddTransaction(transaction){
        let transactionWithId = this.transactions.find(t => t.id === transaction.id);
        
        if(transactionWithId) {
            this.transaction[this.transaction.indexOf(transactionWithId)] = transaction;
        } else {
            this.transactions.push(transaction);
        }
    }

    existingTransaction(address) {
        return this.transaction.find(t => t.input.address === address);
    }
}

module.exports = TransactionPool;