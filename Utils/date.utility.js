export const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const getDateObject = () => new Date();

const day = () => getDateObject().toLocaleDateString(undefined, { day: "2-digit" });
const month = () => getDateObject().toLocaleDateString(undefined, { month: "2-digit" });
const year = () => getDateObject().toLocaleDateString(undefined, { year: "numeric" });
const hours = () => getDateObject().toLocaleTimeString(undefined, { hour: "2-digit", hour12: false });
const minutes = () => getDateObject().toLocaleTimeString(undefined, { minute: "2-digit" });
const seconds = () => getDateObject().toLocaleTimeString(undefined, { second: "2-digit" });
const dayName = () => days[getDateObject().getDay()];

const fullDate = () => {
	return `${day()}/${month()}/${year()}`; // Format: DD/MM/YYYY
};

const fullTime = () => {
	return `${hours()}:${minutes()}:${seconds()}`; // Format: HH:MM:SS
};

export { day, month, year, hours, minutes, seconds, dayName, fullDate, fullTime };
