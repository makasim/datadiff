//package com.datadiff.web;
//
//public class MyWebAppInitializer implements WebApplicationInitializer {
//
//    @Override
//    public void onStartup(ServletContext container) {
//      XmlWebApplicationContext appContext = new XmlWebApplicationContext();
//      appContext.setConfigLocation("/WEB-INF/spring/dispatcher-config.xml");
//
//      ServletRegistration.Dynamic dispatcher =
//        container.addServlet("dispatcher", new DispatcherServlet(appContext));
//      dispatcher.setLoadOnStartup(1);
//      dispatcher.addMapping("/");
//    }
//
// }