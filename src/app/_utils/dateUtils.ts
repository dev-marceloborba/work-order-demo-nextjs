import format from "date-fns/format";

const dateUtils = {
  formatDate: (date: Date) => {
    return format(date, "dd/MM/yyyy");
  },
};

export default dateUtils;
