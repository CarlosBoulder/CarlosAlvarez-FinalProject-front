import { renderHook, screen } from "@testing-library/react";
import useBoulders from "./useBoulders";
import bouldersMock from "../../mocks/bouldersMock";
import renderWithProviders, { wrapper } from "../../utils/testUtils";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import { store } from "../../store";
import { BoulderStructureDetails } from "../../components/CreateBoulderForm/types";
import Layout from "../../components/Layout/Layout";

describe("Given a useBoulders custom hook", () => {
  describe("When it calls getBoulders with a valid token", () => {
    test("Then it should return a list of boulders", async () => {
      const tokenMock =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDcwNWYyOTU0YWVhZTkyNWQ0NmQ4ZDQiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODU3OTE5NjQsImV4cCI6MTY4NTg3ODM2NH0.ShrYNKznLbxIvDdGvBgdy8zsIIL96gASjJddRyIBauY";

      const {
        result: {
          current: { getBoulders },
        },
      } = renderHook(() => useBoulders(tokenMock), { wrapper: wrapper });

      const boulders = await getBoulders();
      const expectedResponse = { boulders: bouldersMock };

      expect(boulders).toStrictEqual(expectedResponse);
    });
  });
  describe("When it calls getBoulders with invalid token", () => {
    test("Then it should return throw error", async () => {
      server.resetHandlers(...errorHandlers);

      const tokenMock = "invalidToken";

      const {
        result: {
          current: { getBoulders },
        },
      } = renderHook(() => useBoulders(tokenMock), { wrapper: wrapper });

      await getBoulders();

      const message = store.getState().uiStore.message;

      expect(message).toBe("Error trying to get boulders");
    });
  });
});

describe("Given a useBoulders custom hook", () => {
  const tokenMock =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDcwNWYyOTU0YWVhZTkyNWQ0NmQ4ZDQiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODU3OTE5NjQsImV4cCI6MTY4NTg3ODM2NH0.ShrYNKznLbxIvDdGvBgdy8zsIIL96gASjJddRyIBauY";

  describe("When it calls deleteBoulders with a valid token and existing id", () => {
    test("Then it should return a 'Boulder deleted' message", async () => {
      const {
        result: {
          current: { deleteBoulder },
        },
      } = renderHook(() => useBoulders(tokenMock), { wrapper: wrapper });

      const boulderId = bouldersMock[0].id;

      await deleteBoulder(boulderId);

      const message = store.getState().uiStore.message;

      expect(message).toBe("Boulder deleted");
    });
  });

  describe("When it calls deleteBoulders with a valid token and no existing id", () => {
    test("Then it should return the message 'Error trying to delete boulder'", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { deleteBoulder },
        },
      } = renderHook(() => useBoulders(tokenMock), { wrapper: wrapper });

      const boulderId = "1589";

      await deleteBoulder(boulderId);

      const message = store.getState().uiStore.message;

      expect(message).toBe("Error trying to delete boulder");
    });
  });

  describe("Given a useBoulders custom hook", () => {
    const tokenMock =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDcwNWYyOTU0YWVhZTkyNWQ0NmQ4ZDQiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODU3OTE5NjQsImV4cCI6MTY4NTg3ODM2NH0.ShrYNKznLbxIvDdGvBgdy8zsIIL96gASjJddRyIBauY";

    describe("When it calls addBoulder with a valid token", () => {
      test("Then it should create a new boulder and show the message 'Boulder created'", async () => {
        const {
          result: {
            current: { addBoulder },
          },
        } = renderHook(() => useBoulders(tokenMock), { wrapper: wrapper });

        const newBoulder: BoulderStructureDetails = {
          boulderDetails: {
            img: "https://example.com/image.jpg",
            name: "New Boulder",
            crag: "New Crag",
            grade: "V5",
            description: "New boulder description",
            country: "New Country",
            spot: "New Spot",
          },
        };

        await addBoulder(newBoulder);

        const message = store.getState().uiStore.message;

        expect(message).toBe("Boulder created");
      });
    });

    describe("When it calls addBoulder with an invalid token", () => {
      test("Then it should show the message 'Error trying to create the boulder'", async () => {
        server.resetHandlers(...errorHandlers);

        const expectedMessage = "Error trying to create the boulder";

        const {
          result: {
            current: { addBoulder },
          },
        } = renderHook(() => useBoulders(tokenMock), { wrapper: wrapper });

        renderWithProviders(<Layout />);

        const newBoulder: BoulderStructureDetails = {
          boulderDetails: {
            img: "https://example.com/image.jpg",
            name: "New Boulder",
            crag: "New Crag",
            grade: "V5",
            description: "New boulder description",
            country: "New Country",
            spot: "New Spot",
          },
        };

        await addBoulder(newBoulder);

        const message = screen.getByText(expectedMessage);

        expect(message).toBeInTheDocument();
      });
    });
  });
});
