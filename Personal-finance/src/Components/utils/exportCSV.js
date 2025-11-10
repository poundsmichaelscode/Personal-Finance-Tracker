import Papa from "papaparse";

export const exportToCSV = (transactions) => {
  if (transactions.length === 0) return alert("No data to export!");

  const csv = Papa.unparse(transactions);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "transactions.csv";
  link.click();
};
