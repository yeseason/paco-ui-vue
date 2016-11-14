<template>
      <div class="navbar-wrapper">
        <div class="navbar">
          <div class="left">
          </div>
          <div class="title">PACO-UI</div>
          <div class="right"></div>
        </div>
      </div>
      <Tabs type="normal">
        <Tab title="单行列表" active=true>
            <div style="margin-top: 5px; margin-bottom: 5px;">
                <List><span slot="title">文字标题</span><span slot="desc">内容内容</span></List>
            </div>
            <div style="margin-top: 5px; margin-bottom: 5px;">
                <List read="true" icon="true"><span slot="title">文字标题</span><span slot="desc">内容内容</span></List>
            </div>
            <div style="margin-top: 5px; margin-bottom: 5px;">
                <List unnew="true" icon="true"><span slot="title">文字标题</span></List>
            </div>
            <div style="margin-top: 5px; margin-bottom: 5px;">
                <List ><span slot="title">文字标题</span><span slot="desc"><paco-switch></paco-switch></span></List>
            </div>
            <div class="list">
                <List  ><span slot="title">文字标题</span><span slot="desc">内容内容</span></List>
                <List icon="true"><span slot="title">文字标题</span><span slot="desc">内容内容</span></List>
                <List icondes="true" ><span slot="title">文字标题</span><span slot="desc">内容内容</span></span><span slot="icon"><paco-check value="on"></paco-check></span></List>
            </div>
            <br>
            <div class="list">
                <List style="false" thumbnail="true" title="好" ><span slot="title">文字标题</span><span slot="desc">内容内容</span></List>
                <List style="false" thumbnail="true" num="1" title="车" icon="true"><span slot="title">文字标题</span><span slot="desc">内容内容</span></List>
                <List  style="false" thumbnail="true" title="主" icon="true"><span slot="title">文字标题</span><span slot="desc">内容内容</span></List>
            </div>
        </Tab>
      <Tab title="双行列表" >
            <div style="margin-top: 5px; margin-bottom: 5px;">
                <List list="double" ><span slot="title">文字标题</span><span slot="desc">内容内容</span></List>
            </div>
            <div style="margin-top: 5px; margin-bottom: 5px;">
                <List list="double" icon="true"><span slot="title">文字标题</span><span slot="desc">内容内容</span></List>
            </div>
            <div >
                <List list="double" ><span slot="title">文字标题</span><span slot="desc">内容内容</span></List>
                <List list="double" icon="true"><span slot="title">文字标题</span><span slot="desc">内容内容</span></List>
                <List icondes="true" list="double">
                    <span slot="title">文字标题</span>
                    <span slot="desc">内容内容</span>
                    <span slot="icon">
                      <paco-check value="on"></paco-check>
                    </span>
                  </List>
            </div>
            <br>
            <div class="list">
                <List list="double"  thumbnail="true" read="true"   title="好" ><span slot="title">文字标题</span><span slot="desc">内容内容</span><span slot="time">下午 8:30</span></List>
                <List  list="double" thumbnail="true" read="true" num="1" title="车" ><span slot="title">文字标题</span><span slot="desc">内容内容</span><span slot="time">上午 10:20</span></List>
                <List list="double" thumbnail="true" title="主" ><span slot="title">文字标题</span><span slot="desc">内容内容</span><span slot="time">上午</span></List>
            </div>
      </Tab>
    </Tabs>
      
</template>
