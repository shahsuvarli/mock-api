import axios from "axios";
import MockAdapter from "axios-mock-adapter";

export const MockCreate = new MockAdapter(axios);

export const Mock = axios;
