import data from "./actors.json";
import { Mock, MockCreate } from "./mockAPI";

MockCreate.onGet("/actors").reply(200, {
  actors: data,
});

export const actorsData = Mock.onGet("/actors");
