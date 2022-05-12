# Vue 3 基础框架模板

## 特性

- ⚡️ [Vue 3][Vue 3]、[Vite 2][Vite]、[pnpm][pnpm]，全新的 Vue 技术栈，为速度而生

- 🍱 [Vue Router][Vue Router]、[Vuex][Vuex]，集成全新的 Vue 全家桶

- 🌍 [预置国际化](./locales)

- 👮 [ESLint][ESLint]、[Stylelint][Stylelint]、[commitlint][commitlint]，预置各种代码检查工具和规则

- 📍 [Standard Version][Standard Version]，一键设置版本号并生成 ChangeLog

## 使用方式

推荐使用 [degit][degit] 下载当前模板，要下载不同托管平台和不同分支的具体方式详见 [degit][degit]。

```shell
$ pnpx degit <当前模板链接>
```

## 已知问题

### 使用了 `unplugin-auto-import` 后触发 ESLint `no-undef` 规则

因为 `unplugin-auto-import` 插件会自动根据上下文代码自动加入 `import` 语句，但 ESLint 无法感知，因此会提示未定义错误。建议在出现错误时，手动在 `eslint` 的配置文件中添加全局变量的配置。

```javascript
module.exports = {
  globals: {
    computed: true // 将 unplugin-auto-import 插件已经自动引入的变量添加到这里
  }
}
```

## 其他模板分支

除了当前 `master` 分支的基础模板以外，还有针对不同部门和其他专门针对 UI 框架预置的其他模板。

### 特性模板

- AntD

### 专属模板

#### 信息系统

- 信息系统基础模板，包含 GTag、Sentry、WoNPS

### 版本发布和自动生成 ChangeLog

## 编辑器推荐设置

## TODO

### 功能

- 预置 Apollo GraphQL Client
- 一键重置模板内容的脚本

### 模板

- 信息系统基础模板
- AntD 模板

### 编辑器

- [ ] 支持 WebStorm 对 `unplugin-vue-components` 和 `unplugin-auto-import` 自动导入的识别和代码提示

## 参考资料

[Vue 3]: https://github.com/vuejs/vue-next
[Vite]: https://github.com/vitejs/vite
[pnpm]: https://pnpm.js.org/
[Vue Router]: https://next.router.vuejs.org/
[Pinia]: https://pinia.vuejs.org/
[Vue i18n]: https://vue-i18n.intlify.dev/
[ESLint]: https://eslint.org/
[Stylelint]: https://stylelint.io/
[commitlint]: https://github.com/conventional-changelog/commitlint
[Standard Version]: https://github.com/conventional-changelog/standard-version
[degit]: https://github.com/Rich-Harris/degit
[vitesse]: https://github.com/antfu/vitesse