import { vi } from "vitest";
import { screen } from "@testing-library/react";
import CreateBoulderForm from "./CreateBoulderForm";
import renderWithProviders from "../../utils/testUtils";
import userEvent from "@testing-library/user-event";

const expectedFirstLabelText = "Image";
const expectedSecondLabelText = "Name";
const expectedThirdLabelText = "Crag";
const expectedFourthLabelText = "Grade";
const expectedFifthLabelText = "Description";
const expectedSixthLabelText = "Spot";
const expectedSeventhLabelText = "Country";

const expectedButtonText = "Create";
const actionOnClick = vi.fn();

describe("Given a CreateBoulderForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show seven inputs", () => {
      renderWithProviders(<CreateBoulderForm handleOnSubmit={actionOnClick} />);
      const firstLabel = screen.getByLabelText(expectedFirstLabelText);
      const secondLabel = screen.getByLabelText(expectedSecondLabelText);
      const thirdLabel = screen.getByLabelText(expectedThirdLabelText);
      const fourthLabel = screen.getByLabelText(expectedFourthLabelText);
      const fifthLabel = screen.getByLabelText(expectedFifthLabelText);
      const sixthLabel = screen.getByLabelText(expectedSixthLabelText);
      const seventhLabel = screen.getByLabelText(expectedSeventhLabelText);

      expect(firstLabel).toBeInTheDocument();
      expect(secondLabel).toBeInTheDocument();
      expect(thirdLabel).toBeInTheDocument();
      expect(fourthLabel).toBeInTheDocument();
      expect(fifthLabel).toBeInTheDocument();
      expect(sixthLabel).toBeInTheDocument();
      expect(seventhLabel).toBeInTheDocument();
    });
    test("Then it should show a button with the text 'Create'", () => {
      renderWithProviders(<CreateBoulderForm handleOnSubmit={actionOnClick} />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the inputs are empty", () => {
    test("Then the button should be disabled", () => {
      renderWithProviders(<CreateBoulderForm handleOnSubmit={actionOnClick} />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeDisabled();
    });
  });

  describe("When it is rendered and the inputs are filled", () => {
    test("Then the button should be enabled", async () => {
      renderWithProviders(<CreateBoulderForm handleOnSubmit={actionOnClick} />);

      const imgLabel = screen.getByLabelText(expectedFirstLabelText);
      const nameLabel = screen.getByLabelText(expectedSecondLabelText);
      const cragLabel = screen.getByLabelText(expectedThirdLabelText);
      const gradeLabel = screen.getByLabelText(expectedFourthLabelText);
      const descriptionLabel = screen.getByLabelText(expectedFifthLabelText);
      const spotLabel = screen.getByLabelText(expectedSixthLabelText);
      const countryLabel = screen.getByLabelText(expectedSeventhLabelText);

      await userEvent.type(imgLabel, "testImg");
      await userEvent.type(nameLabel, "testName");
      await userEvent.type(cragLabel, "testCrag");
      await userEvent.selectOptions(gradeLabel, "7A");
      await userEvent.type(descriptionLabel, "testDescription");
      await userEvent.type(spotLabel, "testSpot");
      await userEvent.type(countryLabel, "testCountry");

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeEnabled();
    });
  });

  describe("When it is rendered, the fields are filled and the button is clicked", () => {
    test("Then it should call the actionOnClick function", async () => {
      renderWithProviders(<CreateBoulderForm handleOnSubmit={actionOnClick} />);

      const imgLabel = screen.getByLabelText(expectedFirstLabelText);
      const nameLabel = screen.getByLabelText(expectedSecondLabelText);
      const cragLabel = screen.getByLabelText(expectedThirdLabelText);
      const gradeLabel = screen.getByLabelText(expectedFourthLabelText);
      const descriptionLabel = screen.getByLabelText(expectedFifthLabelText);
      const spotLabel = screen.getByLabelText(expectedSixthLabelText);
      const countryLabel = screen.getByLabelText(expectedSeventhLabelText);

      await userEvent.type(imgLabel, "testImg");
      await userEvent.type(nameLabel, "testName");
      await userEvent.type(cragLabel, "testCrag");
      await userEvent.selectOptions(gradeLabel, "7A");
      await userEvent.type(descriptionLabel, "testDescription");
      await userEvent.type(spotLabel, "testSpot");
      await userEvent.type(countryLabel, "testCountry");

      const button = screen.getByRole("button", { name: expectedButtonText });

      await userEvent.click(button);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
