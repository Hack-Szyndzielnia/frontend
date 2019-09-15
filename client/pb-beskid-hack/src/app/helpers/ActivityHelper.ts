export default class ActivityHelper {
  public static getIconBasedOnType(type: "GPS" | "QR" | "SOCIAL"): string {
    switch (type) {
      case "GPS":
        return "gps_fixed";
      case "QR":
        return "camera_alt";
      case "SOCIAL":
        return "share";
      default:
        return "event";
    }
  }
}
