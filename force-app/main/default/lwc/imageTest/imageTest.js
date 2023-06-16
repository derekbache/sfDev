import { LightningElement } from "lwc";

let contentDocumentId =
  "SELECT LatestPublishedVersionId FROM ContentDocument WHERE Title = 'testPhoto'";

export default class ImageTest extends LightningElement {}
