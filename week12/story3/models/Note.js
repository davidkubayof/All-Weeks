class Note {
  constructor(ownerUsername, text) {
    this.id = Date.now().toString();
    this.ownerUsername = ownerUsername;
    this.text = text;
    this.createdAt = new Date().toISOString();
  }
}
export default Note