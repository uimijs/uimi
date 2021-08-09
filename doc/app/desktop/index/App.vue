<template>
  <div class="card bg-white px-4 py-3 mb-3">
    <div class="card-body">
      <div class="row">
        <div class="d-none d-sm-block d-flex col-auto">
          <h3>欢迎回来, {{ userName }}!</h3>
        </div>
        <div class="ml-auto text-right mt-n1 d-flex col-auto">
          <div class="d-inline mr-2 dropdown">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
              class="bg-white shadow-sm dropdown-toggle btn btn-light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather align-middle mt-n1"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line></svg
              >Today
            </button>
            <div
              tabindex="-1"
              role="menu"
              aria-hidden="true"
              class="dropdown-menu dropdown-menu-right"
            >
              <button
                type="button"
                tabindex="0"
                role="menuitem"
                class="dropdown-item"
              >
                Action
              </button>
              <button
                type="button"
                tabindex="0"
                role="menuitem"
                class="dropdown-item"
              >
                Another Action
              </button>
              <button
                type="button"
                tabindex="0"
                role="menuitem"
                class="dropdown-item"
              >
                Something else here
              </button>
              <div tabindex="-1" class="dropdown-divider"></div>
              <button
                type="button"
                tabindex="0"
                role="menuitem"
                class="dropdown-item"
              >
                Seperated link
              </button>
            </div>
          </div>
          <button class="shadow-sm mr-1 btn btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather"
            >
              <polygon
                points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
              ></polygon>
            </svg>
          </button>
          <button class="shadow-sm btn btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather"
            >
              <polyline points="23 4 23 10 17 10"></polyline>
              <polyline points="1 20 1 14 7 14"></polyline>
              <path
                d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row mb-3">
      <div class="d-flex col">
        <div class="flex-fill card bg-primary">
          <div class="card-body clearfix">
            <div class="pull-right">
              <p class="h6 text-white m-t-0">今日收入</p>
              <p class="h3 text-white m-b-0">102,125.00</p>
            </div>
            <div class="pull-left">
              <span class="img-avatar img-avatar-48 bg-translucent"
                ><i class="mdi mdi-currency-cny fa-1-5x"></i
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex col">
        <div class="flex-fill card bg-danger">
          <div class="card-body clearfix">
            <div class="pull-right">
              <p class="h6 text-white m-t-0">用户总数</p>
              <p class="h3 text-white m-b-0">920,000</p>
            </div>
            <div class="pull-left">
              <span class="img-avatar img-avatar-48 bg-translucent"
                ><i class="mdi mdi-account fa-1-5x"></i
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex col">
        <div class="flex-fill card bg-success">
          <div class="card-body clearfix">
            <div class="pull-right">
              <p class="h6 text-white m-t-0">下载总量</p>
              <p class="h3 text-white m-b-0">34,005,000</p>
            </div>
            <div class="pull-left">
              <span class="img-avatar img-avatar-48 bg-translucent"
                ><i class="mdi mdi-arrow-down-bold fa-1-5x"></i
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex col">
        <div class="flex-fill card bg-info">
          <div class="card-body clearfix">
            <div class="pull-right">
              <p class="h6 text-white m-t-0">新增留言</p>
              <p class="h3 text-white m-b-0">153 条</p>
            </div>
            <div class="pull-left">
              <span class="img-avatar img-avatar-48 bg-translucent"
                ><i class="mdi mdi-comment-outline fa-1-5x"></i
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="d-flex col">
        <div class="flex-fill card">
          <div class="py-4 card-body">
            <div class="media">
              <div class="d-inline-block mt-2 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather-lg text-primary"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path
                    d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                  ></path>
                </svg>
              </div>
              <div class="media-body">
                <h3 class="mb-2">2.562</h3>
                <div class="mb-0">Sales Today</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex col">
        <div class="flex-fill card">
          <div class="py-4 card-body">
            <div class="media">
              <div class="d-inline-block mt-2 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather-lg text-warning"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <div class="media-body">
                <h3 class="mb-2">17.212</h3>
                <div class="mb-0">Visitors Today</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex col">
        <div class="flex-fill card">
          <div class="py-4 card-body">
            <div class="media">
              <div class="d-inline-block mt-2 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather-lg text-success"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path
                    d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                  ></path>
                </svg>
              </div>
              <div class="media-body">
                <h3 class="mb-2">$ 24.300</h3>
                <div class="mb-0">Total Earnings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex col">
        <div class="flex-fill card">
          <div class="py-4 card-body">
            <div class="media">
              <div class="d-inline-block mt-2 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather-lg text-danger"
                >
                  <path
                    d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                  ></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </div>
              <div class="media-body">
                <h3 class="mb-2">43</h3>
                <div class="mb-0">Pending Orders</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex col">
        <div class="flex-fill card">
          <div class="py-4 card-body">
            <div class="media">
              <div class="d-inline-block mt-2 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather-lg text-info"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path
                    d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                  ></path>
                </svg>
              </div>
              <div class="media-body">
                <h3 class="mb-2">$ 18.700</h3>
                <div class="mb-0">Total Revenue</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="d-flex col-16">
        <div class="flex-fill w-100 card">
          <div class="card-header">
            <div class="card-actions float-right">
              <div class="dropdown">
                <a aria-haspopup="true" class="" aria-expanded="false">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </a>
                <div
                  tabindex="-1"
                  role="menu"
                  aria-hidden="true"
                  class="dropdown-menu dropdown-menu-right"
                >
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    class="dropdown-item"
                  >
                    Action
                  </button>
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    class="dropdown-item"
                  >
                    Another Action
                  </button>
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    class="dropdown-item"
                  >
                    Something else here
                  </button>
                </div>
              </div>
            </div>
            <h5 class="mb-0 card-title">Latest Projects</h5>
          </div>
          <table class="my-0 table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th class="d-none d-xl-table-cell">Start Date</th>
                <th class="d-none d-xl-table-cell">End Date</th>
                <th>Status</th>
                <th class="d-none d-md-table-cell">Assignee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Project Apollo</td>
                <td class="d-none d-xl-table-cell">01/01/2018</td>
                <td class="d-none d-xl-table-cell">31/06/2018</td>
                <td><span class="badge badge-success">Done</span></td>
                <td class="d-none d-md-table-cell">Carl Jenkins</td>
              </tr>
              <tr>
                <td>Project Fireball</td>
                <td class="d-none d-xl-table-cell">01/01/2018</td>
                <td class="d-none d-xl-table-cell">31/06/2018</td>
                <td><span class="badge badge-danger">Cancelled</span></td>
                <td class="d-none d-md-table-cell">Bertha Martin</td>
              </tr>
              <tr>
                <td>Project Hades</td>
                <td class="d-none d-xl-table-cell">01/01/2018</td>
                <td class="d-none d-xl-table-cell">31/06/2018</td>
                <td><span class="badge badge-success">Done</span></td>
                <td class="d-none d-md-table-cell">Stacie Hall</td>
              </tr>
              <tr>
                <td>Project Nitro</td>
                <td class="d-none d-xl-table-cell">01/01/2018</td>
                <td class="d-none d-xl-table-cell">31/06/2018</td>
                <td><span class="badge badge-warning">In progress</span></td>
                <td class="d-none d-md-table-cell">Carl Jenkins</td>
              </tr>
              <tr>
                <td>Project Phoenix</td>
                <td class="d-none d-xl-table-cell">01/01/2018</td>
                <td class="d-none d-xl-table-cell">31/06/2018</td>
                <td><span class="badge badge-success">Done</span></td>
                <td class="d-none d-md-table-cell">Bertha Martin</td>
              </tr>
              <tr>
                <td>Project Romeo</td>
                <td class="d-none d-xl-table-cell">01/01/2018</td>
                <td class="d-none d-xl-table-cell">31/06/2018</td>
                <td><span class="badge badge-success">Done</span></td>
                <td class="d-none d-md-table-cell">Ashley Briggs</td>
              </tr>
              <tr>
                <td>Project Wombat</td>
                <td class="d-none d-xl-table-cell">01/01/2018</td>
                <td class="d-none d-xl-table-cell">31/06/2018</td>
                <td><span class="badge badge-warning">In progress</span></td>
                <td class="d-none d-md-table-cell">Bertha Martin</td>
              </tr>
              <tr>
                <td>Project Zircon</td>
                <td class="d-none d-xl-table-cell">01/01/2018</td>
                <td class="d-none d-xl-table-cell">31/06/2018</td>
                <td><span class="badge badge-danger">Cancelled</span></td>
                <td class="d-none d-md-table-cell">Stacie Hall</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="d-flex col-8">
        <div class="flex-fill w-100 card">
          <div class="card-header">
            <span class="float-right badge badge-info">Today</span>
            <h5 class="mb-0 card-title">Daily feed</h5>
          </div>
          <div class="card-body">
            <div class="media">
              <img
                src="/assets/img/logo.png"
                width="36"
                height="36"
                class="rounded-circle mr-2"
                alt="Ashley Briggs"
              />
              <div class="media-body">
                <small class="float-right text-navy">5m ago</small
                ><strong>Ashley Briggs</strong> started following
                <strong>Stacie Hall</strong> <br /><small class="text-muted"
                  >Today 7:51 pm</small
                >
                <br />
              </div>
            </div>
            <hr />
            <div class="media">
              <img
                src="/assets/img/logo.png"
                width="36"
                height="36"
                class="rounded-circle mr-2"
                alt="Chris Wood"
              />
              <div class="media-body">
                <small class="float-right text-navy">30m ago</small
                ><strong>Chris Wood</strong> posted something on
                <strong>Stacie Hall</strong>'s timeline <br /><small
                  class="text-muted"
                  >Today 7:21 pm</small
                >
                <div class="border text-sm text-muted p-2 mt-1">
                  Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                  rhoncus, sem quam semper libero, sit amet adipiscing...
                </div>
              </div>
            </div>
            <hr />
            <div class="media">
              <img
                src="/assets/img/logo.png"
                width="36"
                height="36"
                class="rounded-circle mr-2"
                alt="Stacie Hall"
              />
              <div class="media-body">
                <small class="float-right text-navy">1h ago</small
                ><strong>Stacie Hall</strong> posted a new blog <br /><small
                  class="text-muted"
                  >Today 6:35 pm</small
                >
              </div>
            </div>
            <hr />
            <button class="btn btn-primary btn-block">Load more</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="d-flex col-12">
        <div class="flex-fill w-100 card">
          <div class="card-header">
            <div class="card-actions float-right">
              <div class="dropdown">
                <a aria-haspopup="true" class="" aria-expanded="false">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </a>
                <div
                  tabindex="-1"
                  role="menu"
                  aria-hidden="true"
                  class="dropdown-menu dropdown-menu-right"
                >
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    class="dropdown-item"
                  >
                    Action
                  </button>
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    class="dropdown-item"
                  >
                    Another Action
                  </button>
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    class="dropdown-item"
                  >
                    Something else here
                  </button>
                </div>
              </div>
            </div>
            <h5 class="mb-0 card-title">Weekly sales</h5>
          </div>
          <div class="card-body">
            <div class="align-self-center w-100">
              <div class="py-3">
                <div class="chart chart-xs">
                  <div class="chartjs-size-monitor">
                    <div class="chartjs-size-monitor-expand">
                      <div class=""></div>
                    </div>
                    <div class="chartjs-size-monitor-shrink">
                      <div class=""></div>
                    </div>
                  </div>
                  <canvas
                    height="300"
                    width="1472"
                    class="chartjs-render-monitor"
                    style="display: block; height: 150px; width: 736px"
                  ></canvas>
                </div>
              </div>
              <table class="mb-0 table">
                <thead>
                  <tr>
                    <th>Source</th>
                    <th class="text-right">Revenue</th>
                    <th class="text-right">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="square"
                        class="svg-inline--fa fa-square fa-w-14 text-primary"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"
                        ></path></svg
                      >Direct
                    </td>
                    <td class="text-right">$ 2602</td>
                    <td class="text-right text-success">+43%</td>
                  </tr>
                  <tr>
                    <td>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="square"
                        class="svg-inline--fa fa-square fa-w-14 text-warning"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"
                        ></path></svg
                      >Affiliate
                    </td>
                    <td class="text-right">$ 1253</td>
                    <td class="text-right text-success">+13%</td>
                  </tr>
                  <tr>
                    <td>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="square"
                        class="svg-inline--fa fa-square fa-w-14 text-danger"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"
                        ></path></svg
                      >E-mail
                    </td>
                    <td class="text-right">$ 541</td>
                    <td class="text-right text-success">+24%</td>
                  </tr>
                  <tr>
                    <td>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="square"
                        class="svg-inline--fa fa-square fa-w-14 text-dark"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"
                        ></path></svg
                      >Other
                    </td>
                    <td class="text-right">$ 1465</td>
                    <td class="text-right text-success">+11%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex col-12">
        <div class="flex-fill w-100 card">
          <div class="card-header">
            <div class="card-actions float-right">
              <div class="dropdown">
                <a aria-haspopup="true" class="" aria-expanded="false">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </a>
                <div
                  tabindex="-1"
                  role="menu"
                  aria-hidden="true"
                  class="dropdown-menu dropdown-menu-right"
                >
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    class="dropdown-item"
                  >
                    Action
                  </button>
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    class="dropdown-item"
                  >
                    Another Action
                  </button>
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    class="dropdown-item"
                  >
                    Something else here
                  </button>
                </div>
              </div>
            </div>
            <h5 class="mb-0 card-title">Appointments</h5>
          </div>
          <div class="p-4 bg-light">
            <h2>You have a meeting today!</h2>
            <p class="mb-0 text-sm">
              Your next meeting is in 2 hours. Check your
              <a href="/dashboard/default">schedule</a> to see the details.
            </p>
          </div>
          <div class="card-body">
            <ul class="timeline">
              <li class="timeline-item">
                <strong>Chat with Carl and Ashley</strong
                ><span class="float-right text-muted text-sm">30m ago</span>
                <p>
                  Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
                  imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices
                  mauris. Integer ante arcu...
                </p>
              </li>
              <li class="timeline-item">
                <strong>The big launch</strong
                ><span class="float-right text-muted text-sm">2h ago</span>
                <p>
                  Sed aliquam ultrices mauris. Integer ante arcu, accumsan a,
                  consectetuer eget, posuere ut, mauris. Praesent adipiscing.
                  Phasellus ullamcorper ipsum rutrum nunc...
                </p>
              </li>
              <li class="timeline-item">
                <strong>Coffee break</strong
                ><span class="float-right text-muted text-sm">3h ago</span>
                <p class="mb-0">
                  Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
                  imperdiet, leo. Maecenas malesuada. Praesent congue erat at
                  massa. Sed cursus turpis vitae tortor...
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue"
import yunxi from "@yunxioa/api"
export default {
  setup() {
    console.log("测试本地", decodeURIComponent(document.cookie))
    const userName = ref()
    userName.value = yunxi.cache.cookie.getItem("username")
    return {
      userName,
    }
  },
}
</script>
