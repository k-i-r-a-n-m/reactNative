export class Place {
  constructor(title, image, coords) {
    this.title = title;
    this.imageUri = image;
    this.coords = coords;
  }

  isValid() {
    return (
      this.title &&
      this.imageUri &&
      this.coords?.latitude &&
      this.coords?.longitude &&
      true
    );
  }
}

// const place1 = new Place("chennai", "uri-12312312312", { lat: 1, lng: 3 });
