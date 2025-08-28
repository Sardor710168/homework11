class StudentDB {
    constructor() {
        this.studentsList = new Map();
    }

    create(name, data) {
        if (this.studentsList.has(name)) {
            return "Xatolik: bu foydalanuvchi allaqachon mavjud!";
        }
        this.studentsList.set(name, data);
        return this.getAll();
    }

    read(name) {
        if (this.studentsList.has(name)) {
            return this.studentsList.get(name);
        }
        return "Foydalanuvchi topilmadi!";
    }

    update(name, newData) {
        if (this.studentsList.has(name)) {
            let currentData = this.studentsList.get(name);
            let updatedData = { ...currentData, ...newData };
            this.studentsList.set(name, updatedData);
            return updatedData;
        }
        return "Xatolik: foydalanuvchi topilmadi!";
    }

    delete(name) {
        if (this.studentsList.has(name)) {
            this.studentsList.delete(name);
            return "Foydalanuvchi o'chirildi!";
        }
        return "Foydalanuvchi topilmadi!";
    }

    getAll() {
        return Array.from(this.studentsList.entries())
            .map(([name, data]) => ({ name, ...data }));
    }
}

let db = new StudentDB();

console.log(db.create("Ali", { age: 20, course: "Math" }));
console.log(db.create("Vali", { age: 22, course: "Physics" }));
console.log(db.create("Ali", { age: 25, course: "Biology" })); // mavjud bo‘lsa xatolik

console.log(db.read("Ali"));
console.log(db.read("Hasan"));

console.log(db.update("Ali", { age: 21 }));
console.log(db.update("Hasan", { age: 23 }));

console.log(db.delete("Vali"));
console.log(db.delete("Hasan"));

console.log(db.getAll());
