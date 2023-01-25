const date = new Date();

// to get current time
export const time = date.toLocaleTimeString('default', {
    hour: "2-digit",
    minute: "2-digit"
});

// to get current date
export const day = date.toLocaleDateString('default', {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
});