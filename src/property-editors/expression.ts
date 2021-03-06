import * as ko from "knockout";

import "./expression.scss";
import { SurveyPropertyConditionEditor } from "../propertyEditors/propertyConditionEditor";
const templateHtml = require("./expression.html");

export class PropertyEditorExpression {
  constructor(
    public hasAceEditor: boolean,
    public getLocString: (name: string) => any,
    public koValue: ko.Observable<any>,
    public availableQuestions: any[],
    public editingObject: any,
    public model: SurveyPropertyConditionEditor,
    public koTextValue: any,
    public showHelpText:any
  ) {}
}

ko.components.register("svd-property-editor-expression", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyPropertyConditionEditor = params.model;
      return new PropertyEditorExpression(
        model.hasAceEditor,
        model.getLocString,
        model.koValue,
        model.availableQuestions,
        model.editingObject,
        model,
        model.koTextValue,
        model.showHelpText
      );
    },
  },
  template: templateHtml,
});
