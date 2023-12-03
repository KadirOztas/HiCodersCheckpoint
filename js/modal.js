function addModal(title, body, callbackOnConfirm, callbackOnClose) {
  const existingModals = document.querySelectorAll(".modal");
  existingModals.forEach((modal) => modal.remove());

  const uniqueModalId = "customModal" + new Date().getTime();
  const modalHtml = `
    <div class="modal fade" id="${uniqueModalId}" tabindex="-1" aria-labelledby="${uniqueModalId}Label" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="${uniqueModalId}Label">${title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ${body}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" id="${uniqueModalId}-confirm-button">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHtml);
  const modalElement = document.getElementById(uniqueModalId);
  const modalInstance = new bootstrap.Modal(modalElement);
  const confirmButton = document.getElementById(
    `${uniqueModalId}-confirm-button`
  );
  confirmButton.addEventListener("click", () => {
    if (typeof callbackOnConfirm === "function") {
      callbackOnConfirm();
    }
    modalInstance.hide();
  });
  modalElement.addEventListener("hidden.bs.modal", () => {
    modalElement.remove();
    if (typeof callbackOnClose === "function") {
      callbackOnClose();
    }
  });

  modalInstance.show();
}
export { addModal };
