<template>
  <header class="d-flex fixed-top bg-white border-bottom p-2">
    <nav class="flex-fill">
      <ui-button icon="legal">
        <span>核准</span>
      </ui-button>
      <ui-button icon="hand-paper-o">
        <span>拒绝</span>
      </ui-button>
      <ui-button icon="reply">
        <span>退回</span>
      </ui-button>
      <ui-button icon="save">
        <span>保存</span>
      </ui-button>
      <ui-button icon="sliders">
        <span>流程追踪</span>
      </ui-button>
      <ui-button icon="list-nav">
        <span>更多操作</span>
      </ui-button>
    </nav>
    <nav class="">
      <ui-button icon="refresh">
        <span>刷新</span>
      </ui-button>
      <ui-button icon="print">
        <span>打印</span>
      </ui-button>
      <ui-button icon="pencil">
        <span>意见栏</span>
      </ui-button>
    </nav>
  </header>
  <div class="container" style="padding-top: 3.5rem">
    <div class="page">
      <div class="card shadow-sm mb-3">
        <div class="card-header border-bottom">销货单单头档</div>
        <div class="card-body">
          <div class="row row-cols-2 row-cols-lg-4 g-2">
            <div class="col">
              <label>字段1</label
              ><textarea
                class="form-control"
                rows="1"
                placeholder="请输入"
              ></textarea>
            </div>
            <div class="col">
              <label>字段2</label
              ><textarea
                class="form-control"
                rows="1"
                placeholder="请输入"
              ></textarea>
            </div>
            <div class="col">
              <label>字段3</label
              ><textarea
                class="form-control"
                rows="1"
                placeholder="请输入"
              ></textarea>
            </div>
            <div class="col">
              <label>字段4</label
              ><textarea
                class="form-control"
                rows="1"
                placeholder="请输入"
              ></textarea>
            </div>
            <div class="col">
              <label>字段5</label
              ><textarea
                class="form-control"
                rows="1"
                placeholder="请输入"
              ></textarea>
            </div>
            <div class="col">
              <label>字段6</label
              ><textarea
                class="form-control"
                rows="1"
                placeholder="请输入"
              ></textarea>
            </div>
            <div class="col">
              <label>字段7</label
              ><textarea
                class="form-control"
                rows="1"
                placeholder="请输入"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="card shadow-sm">
        <div class="card-header">销货单单身档</div>

        <div class="table-responsive">
          <table class="table">
            <tbody>
              <tr>
                <th>#</th>
                <th>Project</th>
                <th>Progress</th>
                <th>Team</th>
                <th>Deadline</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>
                  <div class="custom-checkbox custom-control">
                    <input
                      type="checkbox"
                      data-checkboxes="mygroup"
                      class="custom-control-input"
                      id="checkbox-1"
                    />
                    <label
                      for="checkbox-1"
                      class="custom-control-label"
                    ></label>
                  </div>
                </td>
                <td>Konr Admin Template</td>
                <td class="align-middle">
                  <div
                    class="progress h-4"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="90%"
                  >
                    <div class="progress-bar bg-success w-90"></div>
                  </div>
                </td>
                <td></td>
                <td>10-11-2018</td>
                <td>
                  <div class="badge badge-success">Testing</div>
                </td>
                <td>
                  <a href="#" class="btn btn-action btn-primary" target="_blank"
                    >More</a
                  >
                </td>
              </tr>
              <tr>
                <td>
                  <div class="custom-checkbox custom-control">
                    <input
                      type="checkbox"
                      data-checkboxes="mygroup"
                      class="custom-control-input"
                      id="checkbox-2"
                    />
                    <label
                      for="checkbox-2"
                      class="custom-control-label"
                    ></label>
                  </div>
                </td>
                <td>Gogg beauty Template</td>
                <td class="align-middle">
                  <div
                    class="progress h-4"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="40%"
                  >
                    <div class="progress-bar bg-primary w-40"></div>
                  </div>
                </td>
                <td></td>
                <td>29-11-2018</td>
                <td>
                  <div class="badge badge-info">Coding</div>
                </td>
                <td>
                  <a href="#" class="btn btn-action btn-primary" target="_blank"
                    >More</a
                  >
                </td>
              </tr>
              <tr>
                <td>
                  <div class="custom-checkbox custom-control">
                    <input
                      type="checkbox"
                      data-checkboxes="mygroup"
                      class="custom-control-input"
                      id="checkbox-3"
                    />
                    <label
                      for="checkbox-3"
                      class="custom-control-label"
                    ></label>
                  </div>
                </td>
                <td>Hytr Hosting Template</td>
                <td class="align-middle">
                  <div
                    class="progress h-4"
                    style="height: 4px"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="60%"
                  >
                    <div class="progress-bar bg-danger w-60"></div>
                  </div>
                </td>
                <td></td>
                <td>31-10-2018</td>
                <td>
                  <div class="badge badge-warning">Process</div>
                </td>
                <td>
                  <a href="#" class="btn btn-action btn-primary" target="_blank"
                    >More</a
                  >
                </td>
              </tr>
              <tr>
                <td>
                  <div class="custom-checkbox custom-control">
                    <input
                      type="checkbox"
                      data-checkboxes="mygroup"
                      class="custom-control-input"
                      id="checkbox-4"
                    />
                    <label
                      for="checkbox-4"
                      class="custom-control-label"
                    ></label>
                  </div>
                </td>
                <td>Ureo Education Template</td>
                <td class="align-middle">
                  <div
                    class="progress h-4"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="50%"
                  >
                    <div class="progress-bar bg-secondary w-50"></div>
                  </div>
                </td>
                <td></td>
                <td>15-10-2018</td>
                <td>
                  <div class="badge badge-danger">Completed</div>
                </td>
                <td>
                  <a href="#" class="btn btn-action btn-primary" target="_blank"
                    >More</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
