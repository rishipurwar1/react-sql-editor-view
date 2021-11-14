const downloadFile = ({ data, fileName, fileType }) => {
  const blob = new Blob([data], { type: fileType });

  const a = document.createElement("a");
  a.download = fileName;
  a.href = window.URL.createObjectURL(blob);
  const clickEvt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  a.dispatchEvent(clickEvt);
  a.remove();
};

export const exportToJson = (data, query) => {
  downloadFile({
    data: JSON.stringify(data),
    fileName: `${query}.json`,
    fileType: "text/json",
  });
};

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
