import { describe, expect, it } from "vitest";
import { getAsteroidNames } from "../exercises/e2";
import { data } from "../data/data";

describe("getAsteroidNames", () => {
  it("Should exist", () => {
    expect(getAsteroidNames).toBeInstanceOf(Function);
  });
  it("Should give me an array of the asteroids names", () => {
    expect(getAsteroidNames(data)).toEqual([
      '1 Ceres', '6 Hebe', '47171 Lempo',
      '762 Pulcova', '4179 Toutatis', '50000 Quaoar',
      '2867 Šteins', '5 Astraea', '5145 Pholus',
      '4769 Castalia', '624 Hektor', '216 Kleopatra',
      '3753 Cruithne', '3 Juno', '10 Hygiea', '21 Lutetia',
      '253 Mathilde', '7 Iris', '433 Eros', '90377 Sedna',
      '10199 Chariklo', '87 Sylvia', '90482 Orcus', '5335 Damocles',
      '8 Flora', '2060 Chiron', '5261 Eureka', '588 Achilles', '28978 Ixion',
      '9 Metis', '7066 Nessus', '25143 Itokawa', '10370 Hylonome', '45 Eugenia',
      '(308933) 2006 SQ372', '2 Pallas', '8405 Asbolus', '20000 Varuna', '4 Vesta',
      '243 Ida', '951 Gaspra', '15760 Albion', 'Arrokoth', '101955 Bennu'
    ]);
  });
});
