module.exports = [
  {
    id: 'unsign',
    name: '看视频，解锁进阶内容',
    color: '#00BFFF',
  },
  {
    id: 'dashang',
    name: '打赏',
    color: '#ea3524',
  },
  {
    id: 'subscribeMessage',
    name: '订阅更新',
    color: '#07c160',
  },
  // 文章
  {
    id: 'news',
    name: '产品动态',
  //  color: '#FFB90F',
  },
  // {
  //   id: 'alipay',
  //   name: '支付宝线下红包',
  //   color: '#FF4500',
  // },
  // {
  //   id: 'bus',
  //   name: '支付宝公交地铁红包',
  //   color: '#FFB90F',
  // },
  {
    id: 'oldmenu',
    name: '经典目录',
  },
  // {
  //   id: 'ad',
  //   // name: '云服务广告位招租',
  //   name: '进阶学习(实体书)',
  //   color: '#00BFFF',
  // },
  {
    id: 'introduction',
    name: '项目简介',
    open: false,
    pages: [
      { id: 'README.md', name: '前言' },
      { id: 'CHANGELOG.md', name: '修订记录' },
      { id: 'CONTRIBUTING.md', name: '如何贡献' },
    ],
  },
  {
    id: 'docker_introduction',
    name: 'Docker 简介',
    open: false,
    pages: [
      { id: 'introduction/README.md', name: 'Docker 简介' },
      { id: 'introduction/what.md', name: '什么是 Docker' },
      { id: 'introduction/why.md', name: '为什么要用 Docker' },
    ],
  },
  {
    id: 'basic_concept',
    name: '基本概念',
    open: false,
    pages: [
      { id: 'basic_concept/README.md', name: '基本概念' },
      { id: 'basic_concept/image.md', name: '镜像' },
      { id: 'basic_concept/container.md', name: '容器' },
      { id: 'basic_concept/repository.md', name: '仓库' },
    ],
  },
  {
    id: 'install',
    name: '安装 Docker',
    open: false,
    pages: [
      { id: 'install/README.md', name: '安装 Docker' },
      { id: 'install/ubuntu.md', name: 'Ubuntu' },
      { id: 'install/debian.md', name: 'Debian' },
      { id: 'install/fedora.md', name: 'Fedora' },
      { id: 'install/centos.md', name: 'CentOS' },
      { id: 'install/raspberry-pi.md', name: 'Raspberry Pi' },
      { id: 'install/mac.md', name: 'macOS' },
      { id: 'install/windows.md', name: 'Windows 10' },
      { id: 'install/mirror.md', name: '镜像加速器' },
      { id: 'install/experimental.md', name: '开启实验特性' },
    ],
  },
  {
    id: 'image',
    name: '使用镜像',
    open: false,
    pages: [
      { id: 'image/README.md', name: '使用镜像' },
      { id: 'image/pull.md', name: '获取镜像' },
      { id: 'image/list.md', name: '列出镜像' },
      { id: 'image/rm.md', name: '删除本地镜像' },
      { id: 'image/commit.md', name: '利用 commit 理解镜像构成' },
      { id: 'image/build.md', name: '使用 Dockerfile 定制镜像' },
      { id: 'image/dockerfile/README.md', name: 'Dockerfile 指令详解' },
      { id: 'image/dockerfile/copy.md', name: 'COPY 复制文件' },
      { id: 'image/dockerfile/add.md', name: 'ADD 更高级的复制文件' },
      { id: 'image/dockerfile/cmd.md', name: 'CMD 容器启动命令' },
      { id: 'image/dockerfile/entrypoint.md', name: 'ENTRYPOINT 入口点' },
      { id: 'image/dockerfile/env.md', name: 'ENV 设置环境变量' },
      { id: 'image/dockerfile/arg.md', name: 'ARG 构建参数' },
      { id: 'image/dockerfile/volume.md', name: 'VOLUME 定义匿名卷' },
      { id: 'image/dockerfile/expose.md', name: 'EXPOSE 暴露端口' },
      { id: 'image/dockerfile/workdir.md', name: 'WORKDIR 指定工作目录' },
      { id: 'image/dockerfile/user.md', name: 'USER 指定当前用户' },
      { id: 'image/dockerfile/healthcheck.md', name: 'HEALTHCHECK 健康检查' },
      { id: 'image/dockerfile/onbuild.md', name: 'ONBUILD 为他人作嫁衣裳' },
      { id: 'image/dockerfile/references.md', name: '参考文档' },
      {
        id: 'image/multistage-builds/README.md',
        name: 'Dockerfile 多阶段构建',
      },
      {
        id: 'image/multistage-builds/laravel.md',
        name: '实战多阶段构建 Laravel 镜像',
      },
      {
        id: 'image/manifest.md',
        name: '构建多种系统架构支持的 Docker 镜像',
      },
      { id: 'image/other.md', name: '其它制作镜像的方式' },
      { id: 'image/internal.md', name: '实现原理' },
    ],
  },
  {
    id: 'container',
    name: '操作容器',
    open: false,
    pages: [
      { id: 'container/README.md', name: '操作容器' },
      { id: 'container/run.md', name: '启动' },
      { id: 'container/daemon.md', name: '守护态运行' },
      { id: 'container/stop.md', name: '终止' },
      { id: 'container/attach_exec.md', name: '进入容器' },
      { id: 'container/import_export.md', name: '导出和导入' },
      { id: 'container/rm.md', name: '删除' },
    ],
  },
  {
    id: 'repository',
    name: '访问仓库',
    open: false,
    pages: [
      { id: 'repository/README.md', name: '访问仓库' },
      { id: 'repository/dockerhub.md', name: 'Docker Hub' },
      { id: 'repository/registry.md', name: '私有仓库' },
      { id: 'repository/registry_auth.md', name: '私有仓库高级配置' },
      { id: 'repository/nexus3_registry.md', name: 'Nexus 3' },
    ],
  },
  {
    id: 'data_management',
    name: '数据管理',
    open: false,
    pages: [
      { id: 'data_management/README.md', name: '数据管理' },
      { id: 'data_management/volume.md', name: '数据卷' },
      { id: 'data_management/bind-mounts.md', name: '挂载主机目录' },
    ],
  },
  {
    id: 'network',
    name: '使用网络',
    open: false,
    pages: [
      { id: 'network/README.md', name: '使用网络' },
      { id: 'network/port_mapping.md', name: '外部访问容器' },
      { id: 'network/linking.md', name: '容器互联' },
      { id: 'network/dns.md', name: '配置 DNS' },
    ],
  },
  {
    id: 'advanced_network',
    name: '高级网络配置',
    open: false,
    pages: [
      { id: 'advanced_network/README.md', name: '高级网络配置', pro: 1 },
      { id: 'advanced_network/quick_guide.md', name: '快速配置指南', pro: 1 },
      {
        id: 'advanced_network/access_control.md',
        name: '容器访问控制',
        pro: 1,
      },
      { id: 'advanced_network/port_mapping.md', name: '端口映射实现', pro: 1 },
      { id: 'advanced_network/docker0.md', name: '配置 docker0 网桥', pro: 1 },
      { id: 'advanced_network/bridge.md', name: '自定义网桥', pro: 1 },
      { id: 'advanced_network/example.md', name: '工具和示例', pro: 1 },
      {
        id: 'advanced_network/config_file.md',
        name: '编辑网络配置文件',
        pro: 1,
      },
      {
        id: 'advanced_network/ptp.md',
        name: '实例：创建一个点到点连接',
        pro: 1,
      },
    ],
  },
  {
    id: 'buildx',
    name: "Docker Buildx",
    open: false,
    pages: [
      {id: "buildx/README.md", name: "Docker Buildx"},
      {id: "buildx/buildkit.md", name: "BuildKit"},
      {id: "buildx/buildx.md", name: "使用 buildx 构建镜像"},
      {id: "buildx/multi-arch-images.md",name: "使用 buildx 构建多种系统架构支持的 Docker 镜像"},
    ]
  },
  {
    id: 'compose',
    name: 'Docker Compose',
    open: false,
    pages: [
      { id: 'compose/README.md', name: 'Docker 三剑客之 Compose 项目' },
      { id: 'compose/introduction.md', name: '简介' },
      { id: 'compose/install.md', name: '安装与卸载' },
      { id: 'compose/usage.md', name: '使用' },
      { id: 'compose/commands.md', name: '命令说明' },
      { id: 'compose/compose_file.md', name: 'Compose 模板文件' },
      { id: 'compose/django.md', name: '实战 Django' },
      { id: 'compose/rails.md', name: '实战 Rails' },
      { id: 'compose/wordpress.md', name: '实战 WordPress' },
    ],
  },
  {
    id: 'security',
    name: '安全',
    open: false,
    pages: [
      { id: 'security/README.md', name: '安全' },
      { id: 'security/kernel_ns.md', name: '内核命名空间' },
      { id: 'security/control_group.md', name: '控制组' },
      { id: 'security/daemon_sec.md', name: '服务端防护' },
      { id: 'security/kernel_capability.md', name: '内核能力机制' },
      { id: 'security/other_feature.md', name: '其它安全特性' },
      { id: 'security/summary.md', name: '总结' },
    ],
  },
  {
    id: 'underly',
    name: '底层实现',
    open: false,
    pages: [
      { id: 'underly/README.md', name: '底层实现' },
      { id: 'underly/arch.md', name: '基本架构' },
      { id: 'underly/namespace.md', name: '命名空间' },
      { id: 'underly/cgroups.md', name: '控制组' },
      { id: 'underly/ufs.md', name: '联合文件系统' },
      { id: 'underly/container_format.md', name: '容器格式' },
      { id: 'underly/network.md', name: '网络' },
    ],
  },
  {
    id: 'etcd',
    name: 'Etcd 项目',
    open: false,
    pages: [
      { id: 'etcd/README.md', name: 'Etcd 项目' },
      { id: 'etcd/intro.md', name: '简介' },
      { id: 'etcd/install.md', name: '安装' },
      { id: 'etcd/cluster.md', name: '集群' },
      { id: 'etcd/etcdctl.md', name: '使用 etcdctl' },
    ],
  },
  {
    id: 'coreos',
    name: 'CoreOS 项目',
    open: false,
    pages: [
      { id: 'coreos/README.md', name: 'CoreOS 项目' },
      { id: 'coreos/intro.md', name: '简介' },
      { id: 'coreos/intro_tools.md', name: '工具' },
    ],
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes - 开源容器编排引擎',
    open: false,
    pages: [
      { id: 'kubernetes/README.md', name: 'Kubernetes 项目' },
      { id: 'kubernetes/intro.md', name: '简介' },
      { id: 'kubernetes/concepts.md', name: '基本概念' },
      { id: 'kubernetes/design.md', name: '架构设计' },
    ],
  },
  {
    id: "kube-setup",
    name: "部署 Kubernetes",
    open: false,
    pages: [
      {id: "kubernetes/setup/README.md", name: "部署 Kubernetes"},
      {id: "kubernetes/setup/docker.md", name: "使用 Docker 容器部署"}
    ]
  },
  {
    id: "kubectl",
    name: "Kubernetes 命令行 kubectl",
    open: false,
    pages: [
      {id: "kubernetes/kubectl/README.md",name: "Kubernetes 命令行 kubectl"}
    ]
  },
  {
    id: 'cloud',
    name: '容器与云计算',
    open: false,
    pages: [
      { id: 'cloud/README.md', name: '容器与云计算' },
      { id: 'cloud/intro.md', name: '简介' },
      { id: 'cloud/aws.md', name: '亚马逊云' },
      { id: 'cloud/tencentCloud.md', name: '腾讯云' },
      { id: 'cloud/alicloud.md', name: '阿里云' },
      { id: 'cloud/summary.md', name: '小结' },
    ],
  },
  {
    id: 'cases_os',
    name: '实战案例 - 操作系统',
    open: false,
    pages: [
      { id: 'cases/os/README.md', name: '实战案例 - 操作系统' },
      { id: 'cases/os/busybox.md', name: 'Busybox' },
      { id: 'cases/os/alpine.md', name: 'Alpine' },
      { id: 'cases/os/debian.md', name: 'Debian Ubuntu' },
      { id: 'cases/os/centos.md', name: 'CentOS Fedora' },
      { id: 'cases/os/summary.md', name: '本章小结' },
    ],
  },
  {
    id: 'cases_ci',
    name: '实战案例 - CI/CD',
    open: false,
    pages: [
      { id: 'cases/ci/README.md', name: '实战案例 - CI/CD' },
      { id: 'cases/ci/actions/README.md', name: 'GitHub Actions' },
      { id: 'cases/ci/drone/install.md', name: '部署 Drone' },
      { id: 'cases/ci/drone/README.md', name: 'Drone' },
      { id: 'cases/ci/travis/README.md', name: 'Travis CI' },
    ],
  },
  {
    id: 'ide',
    name: "在 IDE 中使用 Docker",
    open: false,
    pages: [
        {id: "IDE/README.md", name: "在 IDE 中使用 Docker"},
        {id: "IDE/vsCode.md", name: "VSCode"},
    ]
  },
  {
    id: 'opensource',
    name: 'Docker 开源项目',
    open: false,
    pages: [
      { id: 'opensource/README.md', name: 'Docker 开源项目' },
      { id: 'opensource/linuxkit.md', name: 'LinuxKit' },
    ],
  },
  {
    id: 'appendix',
    name: '附录',
    open: false,
    pages: [
      // { id: 'appendix/README.md', name: '附录' },
      { id: 'appendix/faq/README.md', name: '附录一：常见问题总结' },
      { id: 'appendix/repo/README.md', name: '附录二：热门镜像介绍' },
      { id: 'appendix/repo/ubuntu.md', name: 'Ubuntu' },
      { id: 'appendix/repo/centos.md', name: 'CentOS' },
      { id: 'appendix/repo/nginx.md', name: 'Nginx' },
      { id: 'appendix/repo/php.md', name: 'PHP' },
      { id: 'appendix/repo/nodejs.md', name: 'Node.js' },
      { id: 'appendix/repo/mysql.md', name: 'MySQL' },
      { id: 'appendix/repo/wordpress.md', name: 'WordPress' },
      { id: 'appendix/repo/mongodb.md', name: 'MongoDB' },
      { id: 'appendix/repo/redis.md', name: 'Redis' },
      { id: 'appendix/command/README.md', name: '附录三：Docker 命令查询' },
      { id: 'appendix/command/docker.md', name: '客户端命令 (docker)' },
      { id: 'appendix/command/dockerd.md', name: '服务端命令 (dockerd)' },
      { id: 'appendix/best_practices.md', name: '附录四：Dockerfile 最佳实践' },
      { id: 'appendix/debug.md', name: '附录五：如何调试 Docker' },
      { id: 'appendix/resources.md', name: '附录六：资源链接' },
    ],
  },
];
