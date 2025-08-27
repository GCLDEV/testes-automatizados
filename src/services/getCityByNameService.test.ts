import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService";

describe("API: getCityByNameService", () => {
  it("should return city details", async () => {

    const data = {
      id: "1",
      name: "São Paulo",
      sys: {
        country: "BR",
      },
      coord: {
        lon: 123,
        lat: 456,
      },
    }

    jest.spyOn(api, "get").mockResolvedValue({data});

    const response = await getCityByNameService("São Paulo");
    expect(response.length).toBeGreaterThan(0);
  });
})