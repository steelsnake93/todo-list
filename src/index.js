import { formatDistance, subDays } from "date-fns";


    const date = new Date();
    formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })
    console.log(date);
