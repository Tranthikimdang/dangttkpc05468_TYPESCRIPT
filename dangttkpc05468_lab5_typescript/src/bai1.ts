type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

// Tạo một đối tượng có kiểu ElevatedEmployee
const elevatedEmployee: ElevatedEmployee = {
  name: "Kim Đang",
  privileges: ["create", "edit"],
  startDate: new Date("2024-03-27"),
};

// In ra thông tin của elevatedEmployee
console.log(elevatedEmployee);
