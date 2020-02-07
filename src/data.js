function createData(username, email, phone, location) {
  return { username, email, phone, location };
}

const rows = [
  createData("John Snow", "jsnow@thebastards.com", "123456789", "7 Kingdoms"),
  createData("Barry Allen", "ballen@starlabs.com", "987654321", "Central City"),
  createData("Bruce Wayne", "bwayne@waynecorp.com", "192837465", "Gotham"),
  createData("Till Lindemann", "tlindemann@rt.com", "5647338921", "Germany"),
  createData("Dan Abramov", "dabramov@facebook.com", "2910473874", "London")
];

export const callAPI = () => {
  return rows;
};

export default rows;
