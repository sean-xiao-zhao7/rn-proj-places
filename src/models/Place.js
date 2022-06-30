export default class Place {
    constructor(title, imageUrl, address, location) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.address = address;
        this.location = location;
        this.id = Math.random() + new Date().toDateString();
    }
}
