/**
 * It will be used to create node elements dynamically
 * @param {string} targetId the id that it will be insert into
 * @param {string} element the node-string that will be inserted
 * @param {()=> void} callback it will be used to do stuff like add event listener
 * @example const createTag = (...tags) => {
    return tags.map((item) => `<span class="tag">${item}</span>`).join(" ");
  };
  createElement("app", createTag("hello", "world"), () => {
    document.querySelectorAll(".tag").forEach((item) =>
      item.addEventListener("click", () => {
        console.log("hello");
      })
    );
  });
 */
export default function createElement(targetId, element, callback = null) {
  const targetElement = document.getElementById(targetId);
  targetElement.innerHTML = element;
  callback && callback();
}
