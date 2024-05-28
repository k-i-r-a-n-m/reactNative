const dbInsertFavPlaceStatement = async (db, place) => {
  //   const statement = await db.prepareAsync(
  // `INSERT INTO dummyTest
  // (title,imageUri,coords) VALUES
  // ($title,$imageUri, ${JSON.stringify({
  //   latitude: 231211.0,
  //   longitude: 343434.09,
  // })});`
  //   );

  const result = await db.runAsync(
    `INSERT INTO dummyTest (title,imageUri,coords) VALUES (?,?,? )`,
    place.title,
    place.imageUri,
    JSON.stringify(place.coords)
  );

  //   let result = await statement.executeAsync({
  //     $title: place.title,
  //     $imageUri: place.imageUri,
  //     $coords: JSON.stringify(place.coords),
  //   });

  return result;
};

export { dbInsertFavPlaceStatement };

//   Reference
//   const result = await db.runAsync(
//     "INSERT INTO test (value, intValue) VALUES (?, ?)",
//     "aaa",
//     100
//   );
