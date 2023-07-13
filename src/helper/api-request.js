import services from "../config/api/api-services";

export class ApiHelper {
  static get(service = "", postfix = "") {
    if (typeof services[service] !== "undefined") {
      return services[service] + (postfix ? postfix : "");
    }
    return "";
  }
}
