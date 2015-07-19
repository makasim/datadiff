//package com.datadiff.web;
//
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.ModelMap;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.servlet.ModelAndView;
//import org.apache.log4j.Logger;
//
//@Controller
//public class HelloController {
//
//    @RequestMapping(value = "/", method = RequestMethod.GET)
//    public String printWelcome(ModelMap model) {
//
//        Logger logger = Logger.getLogger(this.getClass());
//        logger.info("----------------- Called");
//
//        model.addAttribute("message", "Spring 3 MVC Hello World");
//        return "hello";
//
//    }
//
//    @RequestMapping(value = "/hello/{name:.+}", method = RequestMethod.GET)
//    public ModelAndView hello(@PathVariable("name") String name) {
//
//        Logger logger = Logger.getLogger(this.getClass());
//        logger.info("----------------- Called 2");
//
//        ModelAndView model = new ModelAndView();
//        model.setViewName("hello");
//        model.addObject("msg", name);
//
//        return model;
//
//    }
//
//}