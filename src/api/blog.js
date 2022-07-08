import { AxiosMock, AxiosMockCreate } from "../mocks";
import actorsData from "../mocks/actors/actors.json";

AxiosMockCreate.onGet("/actors").reply(200, {
  actors: actorsData,
});

export const actorsAPI = AxiosMock.get("/actors");
