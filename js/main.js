const log = console.log;

// function timeRemaining(targetDate) {
// 	const now = new Date();

// 	const diffMs = targetDate - now;

// 	if (diffMs <= 0) {
// 		return {
// 			days: 0,
// 			hours: 0,
// 			minutes: 0,
// 			seconds: 0,
// 		};
// 	}

// 	const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
// 	const diffHours = Math.floor(
// 		(diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
// 	);
// 	const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
// 	const diffSeconds = Math.floor((diffMs % (1000 * 60)) / 1000);
// 	const diffMilliseconds = diffMs % 1000;

// 	return {
// 		days: diffDays,
// 		hours: diffHours,
// 		minutes: diffMinutes,
// 		seconds: diffSeconds,
// 	};
// }

// const futureDate = new Date("2024-12-31T23:59:59.999");
// const remainingTime = timeRemaining(futureDate);
// console.log(
// 	`Time remaining: ${remainingTime.days} days, ${remainingTime.hours} hours, ${remainingTime.minutes} minutes, ${remainingTime.seconds} seconds, and ${remainingTime.milliseconds} milliseconds.`
// );
// *******************************************************************************
function timeRemaining(targetDate) {
	const now = new Date();
	const diffMs = targetDate - now;

	if (diffMs <= 0) {
		return {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		};
	}

	const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
	const diffHours = Math.floor(
		(diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
	const diffSeconds = Math.floor((diffMs % (1000 * 60)) / 1000);

	return {
		days: diffDays,
		hours: diffHours,
		minutes: diffMinutes,
		seconds: diffSeconds,
	};
}

function updateTimer() {
	const futureDate = new Date("2024-08-10T09:29:59");
	const remainingTime = timeRemaining(futureDate);

	const timerElement = document.getElementById("timer");
	timerElement.textContent = `До начала: ${remainingTime.days} дней, ${remainingTime.hours} часов, ${remainingTime.minutes} минут, ${remainingTime.seconds} секунд`;
	if (
		remainingTime.days === 0 &&
		remainingTime.hours === 0 &&
		remainingTime.minutes === 0 &&
		remainingTime.seconds === 0
	) {
		timerElement.textContent = `Турнир начался!`;
		clearInterval(interval_1);
	}
}

const interval_1 = setInterval(updateTimer, 1);
