package com.example.final_project.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.final_project.DTO.BoardDTO;

@Controller
@RequestMapping("/join")
public class JoinController {
   @GetMapping("/join/joinform")
   public String saveForm() {
      return "save";
   }

   @PostMapping("/join/joinform")
   public String save(BoardDTO boardDTO) {
      System.out.println("boardDTO=" + boardDTO);
      return "redirect:/";
      // return "index";
   }
}
