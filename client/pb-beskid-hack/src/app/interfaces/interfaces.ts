export interface BeskidEvent {
  name: string;
  title: string;
  duration: Duration;
  desc: string;
  coverImage: string;
}

export interface Duration {
  from: Date;
  to: Date;
}

export interface Activity {
  name: string;
  desc: string;
  local: MapLocation;
  image: string;
  type: "GPS" | "QR" | "SOCIAL";
  status: "NOT" | "COMPLETED";
}

export interface MapLocation {
  lat: number;
  lng: number;
}
