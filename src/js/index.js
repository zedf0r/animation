import "../css/main.css"
import { collapseWidget } from "./widget/collapse"
import { feedbackWidget } from "./widget/feedback";

document.addEventListener("DOMContentLoaded", function () {
    collapseWidget();
    feedbackWidget();
});