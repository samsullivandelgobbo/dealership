export default async function vinDecode(vin: string): Promise<VinDecode> {
  const response = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`
  );
  const data = await response.json();
  console.log(data, data.Results[0])
  if (data.Results.length === 0) {
    throw new Error("Invalid VIN");
  }
  return data.Results[0];
}

