import Converter from "../src/index";
import { expect } from "chai";
import "mocha";

describe("$('#selector')", () => {
  it("should return .getElementById", () => {
    const result = Converter.idSelectors("$('#selector')");
    expect(result).to.equal("document.getElementById(\"selector\")");
  });
  it("should return .getQuerySelectorAll", () => {
    const result = Converter.idSelectors("$('#selector sub-selector')");
    expect(result).to.equal("document.querySelectorAll(\"#selector sub-selector\")");
  });
});

describe("$('.selector')", () => {
  it("should return .getElementByClassName", () => {
    const result = Converter.classSelectors("$('.selector')");
    expect(result).to.equal("document.getElementByClassName(\"selector\")");
  });
  it("should return .getQuerySelectorAll", () => {
    const result = Converter.classSelectors("$('.selector sub-selector')");
    expect(result).to.equal("document.querySelectorAll(\".selector sub-selector\")");
  });
});

describe(".html()", () => {
  it("should return .innerHTML", () => {
    const result = Converter.html(".html()");
    expect(result).to.equal(".innerHTML");
  });
  it("should return .innerHTML = key", () => {
    const result = Converter.html(".html('text')");
    expect(result).to.equal(".innerHTML = 'text'");
  });
});

describe(".text()", () => {
  it("should return .innerText", () => {
    const result = Converter.text(".text()");
    expect(result).to.equal(".innerText");
  });
  it("should return .innerText = key", () => {
    const result = Converter.text(".text('text')");
    expect(result).to.equal(".innerText = 'text'");
  });
});

describe(".toggleClass()", () => {
  it("should return .classList.toggle", () => {
    const result = Converter.toggleClass(".toggleClass(\"test\")");
    expect(result).to.equal(".classList.toggle(\"test\")");
  });
});

describe(".addClass()", () => {
  it("should return .classList.add", () => {
    const result = Converter.addClass(".addClass(\"test\")");
    expect(result).to.equal(".classList.add(\"test\")");
  });
});

describe(".removeClass()", () => {
  it("should return .classList.remove", () => {
    const result = Converter.removeClass(".removeClass(\"test\")");
    expect(result).to.equal(".classList.remove(\"test\")");
  });
});

describe(".hasClass()", () => {
  it("should return .classList.contains", () => {
    const result = Converter.hasClass(".hasClass(\"test\")");
    expect(result).to.equal(".classList.contains(\"test\")");
  });
});

describe(".hide()", () => {
  it("should return .style.display", () => {
    const result = Converter.hide(".hide()");
    expect(result).to.equal(".style.display = \"none\"");
  });
});

describe(".show()", () => {
  it("should return .style.display", () => {
    const result = Converter.show(".show()");
    expect(result).to.equal(".style.display = \"\"");
  });
});

describe(".value()", () => {
  it("should return .value", () => {
    const result = Converter.val(".val()");
    expect(result).to.equal(".value");
  });
  it("should return .value = key", () => {
    const result = Converter.val(".val('text')");
    expect(result).to.equal(".value = 'text'");
  });
});