export const mockUsers = [
  { id: 1, email: "donor@example.com", password: "password", role: "DONOR", name: "John Doe", bloodGroup: "O+" },
  { id: 2, email: "recipient@example.com", password: "password", role: "RECIPIENT", name: "Jane Smith" },
  { id: 3, email: "hospital@example.com", password: "password", role: "HOSPITAL", name: "City Care Hospital" },
  { id: 4, email: "admin@example.com", password: "password", role: "ADMIN", name: "Super Admin" }
];

export const mockRequests = [
  { id: 101, bloodGroup: "O+", units: 2, hospital: "City Care Hospital", urgency: "Emergency", status: "Searching", distance: "2.5 km", date: "2023-10-25" },
  { id: 102, bloodGroup: "A-", units: 1, hospital: "Metro General", urgency: "Normal", status: "Matched", distance: "5.0 km", date: "2023-10-26" }
];
