import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Inspect from 'vite-plugin-inspect'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },

  optimizeDeps: {
    include: [
      'ant-design-vue',
      '@ant-design/icons-vue'
    ]
  },

  plugins: [
    vue(),

    legacy({
      targets: ['defaults', 'not IE 11']
    }),

    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')]
    }),

    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n'
      ],
      dts: 'src/auto-imports.d.ts'
    }),

    Components({
      dts: 'src/components.d.ts',
      resolvers: [
        AntDesignVueResolver({
          importStyle: 'less'
        })
      ]
    }),

    // https://github.com/antfu/vite-plugin-inspect
    Inspect({
      // change this to enable inspect for debugging
      enabled: false
    })
  ]
})
