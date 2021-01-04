KARNATAK LAW SOCIETY’S 

GOGTE INSTITUTE OF TECHNOLOGY 

UDYAMBAG, BELAGAVI-590008 

(An Autonomous Institution under Visvesvaraya Technological University, Belagavi) **(APPROVED BY AICTE, NEW DELHI)** 

Department of Computer Science Engineering 

![](2GI18CS176\_SDLAB%20Project%20Report.001.png)

*Course Activity Report* 

**Software Design and Modeling Laboratory** 

*Submitted in the partial fulfillment for the academic requirement of* 

***5th Semester B.E.*** 

*TITLE: Restaurant Queueing Application Submitted by*** 



|<p>**SL.No. 1.** </p><p>**2.** </p><p>**3** </p>|<p>**Batch Members Names** Varun Shiri </p><p>Vijith Poojary Vinayak V Majati </p>|**USN** 2GI18CS175 2GI18CS176 2GI18CS177 |
| :-: | :-: | :- |
**2020 - 2021** 



|<p>1. </p><p>2. 3. 4. 5. </p><p>6. </p>|<p>Batch No: </p><p>Project Title: Restaurant Queueing Application </p><p>GI18CS)</p><p>USN (2</p><p>Marks Range</p><p>177 </p><p>176 </p><p>175 </p><p>Abstract (PO2) </p><p>Application of the topic to the course (PO2) Literature survey and its findings (PO2)</p><p>0-2 0-3 0-4 </p><p>` `Methodology, Results and Conclusion (PO1, PO3, PO4)</p><p>0-6 0-5 </p><p>Report and Oral presentation skill (PO9, PO10) </p>|
| - | - |
Total  20 

Software Requirements Specification ![](2GI18CS176\_SDLAB%20Project%20Report.002.png)

1. Introduction 
1. Purpose 
1. Intended Audience 
1. Intended Use 
1. Project Scope 
2. Overall Description 
   1. User Needs 
2. System Features and Requirements 
1. Functional Requirements 
1. Non – Functional Requirements 
1. Hardware/Software Interface 
4. Artefacts 
4. Prototype 
4. Conclusion 
4. References 

Introduction: ![](2GI18CS176\_SDLAB%20Project%20Report.003.png)

**Purpose:** The purpose of this application is to build an online system that enables you to book ![](2GI18CS176\_SDLAB%20Project%20Report.004.png)a table at a restaurant to avoid the hassle of waiting in queues. 

**Intended Audience:** This project is a prototype and is restricted within the college premises. Its use can be extended to the outside world after suitable architectural modifications. ![](2GI18CS176\_SDLAB%20Project%20Report.005.png)

**Intended Use:** The application was mainly built for a college project. It can be used by the public to make table reservations at ![](2GI18CS176\_SDLAB%20Project%20Report.006.png)a restaurant. 

**Project Scope:** Queueing up at a restaurant without knowing how long it will take to be seated is ![](2GI18CS176\_SDLAB%20Project%20Report.007.png)a big factor in bringing down customer satisfaction. We want to solve this problem by informing the customers of their position in the queue when they come in, and the estimated time to be seated. They will also be informed once they are at the head of the queue (position 1), so that customers can make their way to the restaurant in time**.** The position of the customer in the queue is updated through an admin dashboard. 

Overall Description: ![](2GI18CS176\_SDLAB%20Project%20Report.008.png)

**User Needs:** In a fast – paced world, waiting at a long queue in a restaurant is an undesirable hindrance. Thus, it would be convenient for people to have an application that enables them to check the availability of tables at ![](2GI18CS176\_SDLAB%20Project%20Report.009.png)a restaurant of their choice from a list of various partnered eateries. Users should be able to then make a reservation for a table at the restaurant. 

Restaurants also need an interface to manage the bookings made by clients. Having such a dashboard would greatly help them manage their tables, especially on a crowded day. 

Customers often come-in in groups, and the restaurant also has variable capacity tables to be filled. The solution should recommend through the admin dashboard the best candidate to be seated next even if their position in the queue is not 1. Queue must be updated correctly and the customer's estimated time to be seated should be updated too.  

System Features and Requirements: ![](2GI18CS176\_SDLAB%20Project%20Report.010.png)

**Functional Requirements:** ![](2GI18CS176\_SDLAB%20Project%20Report.011.png)

1. The user should be able to check the availability of tables at a restaurant of his choice from a list 
1. The user should be able to reserve a table at a particular restaurant by providing some personal details and group size 
1. The user must get a notification of his place in the queue and an estimated time to be seated. 
1. The admin must be able to login to the dashboard and allot/manage the tables of available size to the customer who has asked for a reservation. 

**Non – Functional Requirements: ![](2GI18CS176\_SDLAB%20Project%20Report.012.png)**

1. The server hardware can be any computer capable of running both the web and database servers and handling the expected traffic.  
1. For a small-scale restaurant that is not expecting to see much web traffic, an average personal computer may be appropriate.  
1. Once the site starts generating more hits, though, it will likely be necessary to upgrade to a dedicated host to ensure proper performance. 
1. The exact cut-offs will need to be determined through a more thorough stress testing of the system. 

**Hardware/Software Interface:** ![](2GI18CS176\_SDLAB%20Project%20Report.013.png)

This section lists the minimum hardware and software requirements needed to run the system efficiently. 

**Hardware Interface:** 

- Pentium Processor  
- 60 MB of free hard-drive space  
- 128 MB of RAM  

**Software Interface:** 

- Operating System: Windows (Vista/7 or above) 
- Web Browser: IE 10 or above, Mozilla FF 31 and above or Google Chrome 
- Drivers: Java Runtime Environment 
- Integrated Development Environment: Eclipse J2EE or Apache Tomcat 

Artefacts: ![](2GI18CS176\_SDLAB%20Project%20Report.014.png)

**Sequence Diagram:** ![](2GI18CS176\_SDLAB%20Project%20Report.015.png)![](2GI18CS176\_SDLAB%20Project%20Report.016.png)

**Class Diagram:** ![](2GI18CS176\_SDLAB%20Project%20Report.017.png)

- **Login Class Diagram** ![](2GI18CS176\_SDLAB%20Project%20Report.018.png)
- **Queueing Class Diagram** ![](2GI18CS176\_SDLAB%20Project%20Report.019.png)
- **Use Case Diagram** ![](2GI18CS176\_SDLAB%20Project%20Report.020.png)
- **Activity Diagram** ![](2GI18CS176\_SDLAB%20Project%20Report.021.png)
- **Entity – Relationship (ER) Diagram:** ![](2GI18CS176\_SDLAB%20Project%20Report.022.png)

Prototype:![](2GI18CS176\_SDLAB%20Project%20Report.023.png)

![](2GI18CS176\_SDLAB%20Project%20Report.024.png)

![](2GI18CS176\_SDLAB%20Project%20Report.025.png)

![](2GI18CS176\_SDLAB%20Project%20Report.026.png)

![](2GI18CS176\_SDLAB%20Project%20Report.027.png)

Conclusion: ![](2GI18CS176\_SDLAB%20Project%20Report.028.png)

The main objective of the application is to help Computer Science students understand the basics of software development. The following results have been achieved after completing the system and relate back to the system’s objective.  

- Should allow the user to see Success message: after placing an order: This is achieved when the user successfully places an order. The user is given the order confirmation number along with success message 
- Should allow users to browse through different Restaurants 
- Should allow Managers to allot a table. 

References: ![](2GI18CS176\_SDLAB%20Project%20Report.029.png)

th

1. Ian Sommerville: Software Engineering, Pearson Education, 9 Edition onwards. 
1. http://vlabs.iitkgp.ernet.in/se/ 
1. www.outsource2india.com 
1. www.ncbi.nlm.nih.gov 
1. www.creately.com 
