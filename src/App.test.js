import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

import App from "./App";
import { store } from "./store";

import React from "react";
import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";
import Login from "./components/Login";
import PageNotFound from "./components/error/PageNotFound";
import LeaderBoard from "./components/leaderboard/LeaderBoard";
import New from "./components/newpolly/New";

describe("App Page", () => {
  it("snapshots", () => {
    const view = render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(view).toMatchSnapshot();
  });
});

describe("PageNotFound Page", () => {
  it("snapshots", () => {
    const view = render(<PageNotFound />);
    expect(view).toMatchSnapshot();
  });
});

describe("New Page", () => {
  it("snapshots", () => {
    const view = render(
      <MemoryRouter>
        <Provider store={store}>
          <New />
        </Provider>
      </MemoryRouter>
    );
    expect(view).toMatchSnapshot();
  });
});

describe("LeaderBoard Page", () => {
  it("snapshots", () => {
    const view = render(
      <MemoryRouter>
        <Provider store={store}>
          <LeaderBoard />
        </Provider>
      </MemoryRouter>
    );
    expect(view).toMatchSnapshot();
  });
});

describe("function _saveQuestionAnswer", () => {
  it("can save question answer with correct params", async () => {
    const authedUser = "sarahedo";
    const qid = "vthrdm985a262al8qx3do";
    const answer = "optionOne";
    const result = await _saveQuestionAnswer({ authedUser, qid, answer });
    expect(result).toEqual(true);
  });

  it("return error when save question answer with wrong question id", async () => {
    const authUser = "sarahed";
    const questionID = "lalalala";
    const answer = "optionOne";
    try {
      await _saveQuestionAnswer({ authUser, questionID, answer });
    } catch (e) {
      expect(e).toBe("Error");
    }
  });
});

describe("function _saveQuestion", () => {
  it("can save new question with correct author", async () => {
    const optionOneText = "Plan A";
    const optionTwoText = "Plan B";
    const author = "sarahedo";
    const result = await _saveQuestion({
      optionOneText,
      optionTwoText,
      author,
    });
    expect(result).not.toEqual("Error");
  });

  it("Async Function incorrect", async () => {
    const optionOneText = "Plan A";
    const optionTwoText = "Plan B";
    const author = "notexist";
    try {
      await _saveQuestion({ optionOneText, optionTwoText, author });
    } catch (e) {
      expect(e).toBe("Error");
    }
  });
});

describe("Login Page", () => {
  it("should see login form", () => {
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const loginTitle = view.queryByTestId("employee-title");
    const username = view.queryByTestId("username");
    const submitButton = view.queryByTestId("submit");

    expect(view).toMatchSnapshot();
    expect(loginTitle).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("test fireEvent change in login form", () => {
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const username = view.queryByTestId("username");

    fireEvent.change(username, { target: { value: "johndoe" } });
    expect(username.value).toBe("johndoe");
  });
});

describe("NewPol", () => {
  it("snapshots", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <New />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it("should show new pol form", () => {
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <New />
        </BrowserRouter>
      </Provider>
    );

    const firstInputLabel = view.queryByTestId("firstOptionLabel");
    const secondInputLabel = view.queryByTestId("secondOptionLabel");
    const submit = view.queryByTestId("submit-new");

    expect(firstInputLabel.textContent).toBe("First Option");
    expect(secondInputLabel.textContent).toBe("Second Option");
    expect(submit.textContent).toBe("Submit");
  });
  it("should be fill with right input", () => {
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <New />
        </BrowserRouter>
      </Provider>
    );

    const firstInput = view.queryByTestId("firstOption");
    const secondInput = view.queryByTestId("secondOption");

    fireEvent.change(firstInput, { target: { value: "Option One" } });
    fireEvent.change(secondInput, { target: { value: "Option Two" } });
    expect(firstInput.value).toBe("Option One");
    expect(secondInput.value).toBe("Option Two");
  });
});
