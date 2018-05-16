export class Task {
    public id: number;
    // public $key: string;
    public textDetails: string;
    public categoryId: number;
    public completedFlag: boolean;

    constructor(textDetails, categoryId) {
        // this.id = id;
        this.textDetails = textDetails;
        this.categoryId = categoryId;
        this.completedFlag = false;
    }

    toString() {
        return JSON.stringify(this);
    }
}
