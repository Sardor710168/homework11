let Expenses = {
    water: 0,
    gas: 0,
    electricity: 0,

    addExpense: function(type, amount) {
        if(this.hasOwnProperty(type)) {
            this[type] += amount
            console.log(`${type} uchun ${amount} qo'shildi. Yangi summa: ${this[type]}`)
        } else {
            console.log(`${type} degan xarajat turi mavjud emas!`)
        }
    },

    removeExpense: function(type, amount) {
        if(this.hasOwnProperty(type)) {
            if(this[type] >= amount){
                this[type] -= amount
                console.log(`${type} uchun ${amount} olib tashlandi. Yangi summa: ${this[type]}`)
            } else {
                console.log(`${type} uchun mablag' yetarli emas!`)
            }
        } else {
            console.log(`${type} degan xarajat turi mavjud emas!`)
        }
    },

    printMonthlyReport: function() {
        console.log(`Suv uchun oylik xarajat: ${this.water}`)
        console.log(`Gaz uchun oylik xarajat: ${this.gas}`)
        console.log(`Elektr energiyasi uchun oylik xarajat: ${this.electricity}`)
    }
}

Expenses.addExpense("water", 50)
Expenses.addExpense("gas", 30)
Expenses.addExpense("electricity", 100) 

Expenses.removeExpense("gas", 10)
Expenses.printMonthlyReport()
