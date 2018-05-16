export class Category {
    public id: string;
    public parentalCategoryId: string;
    public name: string;

    constructor(id, parentalCategoryId, textDetails) {
        this.id = id;
        this.parentalCategoryId = parentalCategoryId;
        this.name = textDetails;
    }

    toString() {
        return JSON.stringify(this);
    }
}

