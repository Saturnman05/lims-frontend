import { parseISO, addHours, format } from "date-fns";
import { toZonedTime } from "date-fns-tz";

export const formatDateToDDMMYYY = (date, sep = "-") => {
    const timezone = "America/New_York";
    const d = typeof date === "string" ? parseISO(date) : date;
  
    // Ajustar manualmente el desfase horario
    const fixedDate = addHours(d, 4); // Compensa el desfase de -4 horas en horario de verano
    const zonedDate = toZonedTime(fixedDate, timezone);
  
    return format(zonedDate, `dd${sep}MM${sep}yyyy`);
  };